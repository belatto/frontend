import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
    }
    return Promise.reject(error);
  }
);

// Contact API
export const contactAPI = {
  // Send contact message
  sendMessage: async (messageData) => {
    try {
      const response = await apiClient.post('/contact', messageData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao enviar mensagem');
    }
  },

  // Get contact messages (admin only)
  getMessages: async (skip = 0, limit = 100) => {
    try {
      const response = await apiClient.get(`/contact/messages?skip=${skip}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao buscar mensagens');
    }
  },

  // Mark message as read (admin only)
  markAsRead: async (messageId) => {
    try {
      const response = await apiClient.put(`/contact/messages/${messageId}/read`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao marcar mensagem como lida');
    }
  }
};

// Experience API
export const experienceAPI = {
  // Get all experiences
  getAll: async () => {
    try {
      const response = await apiClient.get('/experiences');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao buscar experiências');
    }
  },

  // Create new experience (admin only)
  create: async (experienceData) => {
    try {
      const response = await apiClient.post('/experiences', experienceData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao criar experiência');
    }
  },

  // Update experience (admin only)
  update: async (id, experienceData) => {
    try {
      const response = await apiClient.put(`/experiences/${id}`, experienceData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao atualizar experiência');
    }
  },

  // Delete experience (admin only)
  delete: async (id) => {
    try {
      const response = await apiClient.delete(`/experiences/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao remover experiência');
    }
  }
};

// Skills API
export const skillsAPI = {
  // Get all skills
  getAll: async () => {
    try {
      const response = await apiClient.get('/skills');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao buscar habilidades');
    }
  },

  // Create new skill (admin only)
  create: async (skillData) => {
    try {
      const response = await apiClient.post('/skills', skillData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao criar habilidade');
    }
  },

  // Update skill (admin only)
  update: async (id, skillData) => {
    try {
      const response = await apiClient.put(`/skills/${id}`, skillData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao atualizar habilidade');
    }
  },

  // Delete skill (admin only)
  delete: async (id) => {
    try {
      const response = await apiClient.delete(`/skills/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao remover habilidade');
    }
  }
};

// Profile API
export const profileAPI = {
  // Get profile
  get: async () => {
    try {
      const response = await apiClient.get('/profile');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao buscar perfil');
    }
  },

  // Update profile (admin only)
  update: async (profileData) => {
    try {
      const response = await apiClient.put('/profile', profileData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro ao atualizar perfil');
    }
  }
};

// Auth API
export const authAPI = {
  // Admin login
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      const { access_token, user } = response.data;
      
      // Store token and user info
      localStorage.setItem('admin_token', access_token);
      localStorage.setItem('admin_user', JSON.stringify(user));
      
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Erro no login');
    }
  },

  // Verify token
  verify: async () => {
    try {
      const response = await apiClient.get('/auth/verify');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Token inválido');
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
  },

  // Check if user is logged in
  isAuthenticated: () => {
    const token = localStorage.getItem('admin_token');
    const user = localStorage.getItem('admin_user');
    return !!(token && user);
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('admin_user');
    return user ? JSON.parse(user) : null;
  }
};

// Health check
export const healthCheck = async () => {
  try {
    const response = await apiClient.get('/');
    return response.data;
  } catch (error) {
    throw new Error('Backend não está respondendo');
  }
};