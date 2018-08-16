import { ADD_ARTICLE } from "../constants/action-types";
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });

export const formSubmit = f => ({ type: "CREATE_USER", payload: f });