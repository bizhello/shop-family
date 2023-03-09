import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  getUserFullFilled,
  getUserPending,
  getUserRejected,
} from "../../store/auth/actions";
import UserService from "../../services/UserService";
import { STORAGE_USER_ID } from "../../common/constants";

const useAuth = () => {
  const dispatch = useDispatch();
  
  const getUser = useCallback(async () => {
    const userId = localStorage.getItem(STORAGE_USER_ID);
    try {
      dispatch(getUserPending());
      const { data } = await UserService.getUserById(userId);
      dispatch(getUserFullFilled(data));
      return data;
    } catch (error) {
      dispatch(getUserRejected());
    }
  }, [dispatch]);

  return getUser;
};

export default useAuth;
