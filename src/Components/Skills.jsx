function Skills() {
  return (
    <div style={{ userSelect: 'none' }}>
      <div
        className="flex items-center justify-center p-4 py-28"
        style={{
          backgroundImage: 'url(https://drive.google.com/uc?id=1Y-iyL7pOjPZaGMdLF96Id5I55_j0nh15)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-white text-4xl font-bold"> TECHNICAL SKILLS </p>
      </div>

      <div class="bg-gradient-to-r from-violet-600 to-blue-700 p-4 flex flex-wrap justify-evenly">

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 hover:scale-105 transition duration-300 ease-in-out">
            <tbody>
              <tr class="text-white bg-violet-800 shadow-md hover:bg-violet-900 transform  text-xl">
                <td class="px-16 py-8">
                  HTML
                </td>
                <td class="px-16 py-8">
                  CSS
                </td>
                <td class="px-16 py-8">
                  Bootstrap
                </td>
                <td class="px-16 py-8">
                  Tailwind
                </td>
                <td class="px-16 py-8">
                  Figma
                </td>
              </tr>
              <tr class="text-white bg-violet-800 shadow-md hover:bg-violet-900 transform  text-xl">
                <td class="px-16 py-8">
                  Javascript
                </td>
                <td class="px-16 py-8">
                  Node JS
                </td>
                <td class="px-16 py-8">
                  Express JS
                </td>
                <td class="px-16 py-8">
                  React JS
                </td>
                <td class="px-16 py-8">
                  Redux
                </td>
              </tr>
              <tr class= "text-white bg-violet-800 shadow-md hover:bg-violet-900 transform  text-xl">
                <td class="px-16 py-8">
                  MongoDB
                </td>
                <td class="px-16 py-8">
                  MySQL
                </td>
                <td class="px-16 py-8">
                  RDBMS
                </td>
                <td class="px-16 py-8">
                  MVC Architecture
                </td>
                <td class="px-16 py-8">
                  AWS
                </td>
              </tr>
              <tr class="text-white bg-violet-800 shadow-md hover:bg-violet-900 transform  text-xl">
                <td class="px-16 py-8">
                  REST API
                </td>
                <td class="px-16 py-8">
                  Data Structure
                </td>
                <td class="px-16 py-8">
                  Git
                </td>
                <td class="px-16 py-8">
                UI Designing
                </td>
                <td class="px-16 py-8">
                Project Hosting 
                </td>
              </tr>
            </tbody>
          </table>
        </div>

  
       
        {/* <a href="#" class="text-white bg-violet-800 shadow-md hover:bg-violet-700 transform hover:scale-105 transition duration-300 ease-in-out rounded-lg px-6 py-3 text-md font-light m-2" aria-current="page"> HOSTING </a> */}
      </div>

    </div>

  )
}
export default Skills;