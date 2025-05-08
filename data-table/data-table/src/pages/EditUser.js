const { id } = useParams();
const users = getUsers();
const user = users.find((u) => u.id === id);

useEffect(() => {
  if (!user) {
    navigate('/view');
  }
}, []);
