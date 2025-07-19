import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="app-wrapper">
    {/* 여기에 공통 컴포넌트(헤더, 네비 등) 넣어도 됨 */}
    <Outlet /> {/* 라우터 자식 컴포넌트 자리 */}
  </div>
);

function App() {
  return (
      <Layout />
  );
}

export default App;
