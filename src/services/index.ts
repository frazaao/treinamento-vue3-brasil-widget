import axios from "axios";
import FeedbacksService from "./feedbacks";

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const canThrowAnError =
      error.request.status === 0 || error.request.status === 500;

    if (canThrowAnError) {
      throw new Error(error.message);
    }

    return error;
  }
);

export default {
  feedbacks: FeedbacksService(httpClient),
};
