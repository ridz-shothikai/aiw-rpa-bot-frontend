import { useState } from 'react';
import axios from 'axios';

const BASE_URL = "https://your-api-url.com/api"; // Replace with your actual base URL

// Custom Hook for GET requests
const useGetRequest = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

// Custom Hook for POST requests
const usePostRequest = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);
      return response.data;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, postData };
};

// Custom Hook for PUT requests
const usePutRequest = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const putData = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.put(`${BASE_URL}/${endpoint}`, payload);
      return response.data;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, putData };
};

// Custom Hook for DELETE requests
const useDeleteRequest = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/${endpoint}`);
      return response.data;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, deleteData };
};

// Custom Hooks for Individual Fields

export const useGetAccountNumber = () => {
  const [accountNumber, setAccountNumber] = useState("");

  const handleAccountNumberChange = (newAccountNumber) => {
    setAccountNumber(newAccountNumber);
  };

  return { accountNumber, setAccountNumber: handleAccountNumberChange };
};

export const useGetName = () => {
  const [name, setName] = useState("");

  const handleNameChange = (newName) => {
    setName(newName);
  };

  return { name, setName: handleNameChange };
};

export const useGetVerifyProcessStatus = () => {
  const [verifyProcessStatus, setVerifyProcessStatus] = useState(null);

  const handleVerifyProcessStatusChange = (newStatus) => {
    setVerifyProcessStatus(newStatus);
  };

  return { verifyProcessStatus, setVerifyProcessStatus: handleVerifyProcessStatusChange };
};

export const useGetInitiatedDate = () => {
  const [initiatedDate, setInitiatedDate] = useState("");

  const handleInitiatedDateChange = (newDate) => {
    setInitiatedDate(newDate);
  };

  return { initiatedDate, setInitiatedDate: handleInitiatedDateChange };
};

export const useGetNID = () => {
  const [nid, setNID] = useState("");

  const handleNIDChange = (newNID) => {
    setNID(newNID);
  };

  return { nid, setNID: handleNIDChange };
};

export const useGetRemark = () => {
  const [remark, setRemark] = useState("");

  const handleRemarkChange = (newRemark) => {
    setRemark(newRemark);
  };

  return { remark, setRemark: handleRemarkChange };
};

export const useGetAccountStatus = () => {
  const [accountStatus, setAccountStatus] = useState("");

  const handleAccountStatusChange = (newStatus) => {
    setAccountStatus(newStatus);
  };

  return { accountStatus, setAccountStatus: handleAccountStatusChange };
};

export const useGetProcessStatus = () => {
  const [processStatus, setProcessStatus] = useState("");

  const handleProcessStatusChange = (newStatus) => {
    setProcessStatus(newStatus);
  };

  return { processStatus, setProcessStatus: handleProcessStatusChange };
};

export const useToggleView = () => {
  const [viewState, setViewState] = useState({});

  const toggleView = (accountNumber) => {
    setViewState((prevState) => ({
      ...prevState,
      [accountNumber]: !prevState[accountNumber],
    }));
  };

  return { viewState, toggleView };
};

export const useSelectedRange = () => {
  const [selectedRange, setSelectedRange] = useState(null);

  const handleRangeChange = (newRange) => {
    setSelectedRange(newRange);
  };

  return { selectedRange, setSelectedRange: handleRangeChange };
};

export {
  useGetRequest,
  usePostRequest,
  usePutRequest,
  useDeleteRequest,
};
