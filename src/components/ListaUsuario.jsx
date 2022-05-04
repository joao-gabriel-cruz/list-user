import { Link } from 'react-router-dom';

function ListaUsuario(props) {
  return (
    <div className="App">
      <div className=" bg-sky-100 w-full h-screen flex flex-col justify-center items-center">
        <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Lista de usuários
            </h3>
          </div>
          {props.user.length > 0 ? (
            props.user.map((item) => (
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {item.nome}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {item.email}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"></div>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        fasdfas
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        fasdfas
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2367
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link className="text-sky-600 mt-5" to="/">
          cadastrar usuario
        </Link>
      </div>
    </div>
  );
}
export default ListaUsuario;
