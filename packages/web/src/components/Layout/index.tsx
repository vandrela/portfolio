const Layout = ({ children }: any) => {
  return (
    <>
      <main className="h-screen bg-[#0C0D1B]">{children}</main>
      {/* we need to use variables color instead of bg-[#0...]*/}
    </>
  );
};

export default Layout;
