
function LoginForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log(props.onLogin)
    props.onLogin(); // Call the parent's login handler
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input type="text" placeholder="Enter username" required />
        </label>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>
          Password:
          <input type="password" placeholder="Enter password" required />
        </label>
      </div>
      <button type="submit" style={{ marginTop: '20px' }}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
