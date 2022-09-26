const Header = () => {
  const currentTime = new Date().toLocaleDateString();
  return (
    <div className="mx-auto flex justify-between px-20 bg-slate-900 text-white py-4">
      <h1>Welcome to The Weather App</h1>
      <h6>{currentTime}</h6>
    </div>
  );
};

export default Header;
