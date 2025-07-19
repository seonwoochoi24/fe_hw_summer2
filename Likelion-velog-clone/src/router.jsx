// Router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import PostDetail from "./pages/PostDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 메인페이지
      { path: "/", 
        element: <HomePage /> },
      // 게시글 상세페이지
      { path: "boards/:id",
        element: <PostDetail />}
    ],
  },
]);

export default router;
