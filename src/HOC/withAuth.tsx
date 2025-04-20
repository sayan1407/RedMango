const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const isAuthenticated = localStorage.getItem("token");
    if (!isAuthenticated) {
      window.location.href = "/login";
      return null;
    }
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;