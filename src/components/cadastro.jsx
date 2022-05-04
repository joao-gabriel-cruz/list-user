import { Link } from 'react-router-dom';

function Cadastro() {
  function submitBack(event) {
    event.preventDefault();
    let data = {
      nome: event.target.nome.value,
      senha: event.target.password.value,
      email: event.target.emailaddress.value,
    };
    console.log(data);

    fetch('http://localhost:3001/api/criar', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Faça seu cadastro
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            ></a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={submitBack} method="POST">
          <input type="hidden" name="remember" defaultValue="true" />

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="nome"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="emailaddress"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="senha" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="senha"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-sm">
              <Link className="text-sky-600" to="/lista">
                {' '}
                lista de usuários
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
