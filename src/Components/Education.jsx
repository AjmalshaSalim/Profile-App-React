function Education() {
  return (
    <div style={{ userSelect: 'none' }}>
      <div
        className="flex items-center justify-center p-4 py-28"
        style={{
          backgroundImage: 'url(https://drive.google.com/uc?id=1jLQaa7TckW8F2r6z4o-yPjU7z2X1zHmu)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-white text-4xl font-bold">QUALIFICATIONS</p>
      </div>
      <div className="flex justify-around bg-gradient-to-r from-emerald-600 to-emerald-900">
        <div className="flex flex-col p-4 text-lime-300 text-xl py-48 gap-10">
          <div>
            <table class="min-w-full text-left text-sm font-light">
              <tbody>
                <tr
                  class="border-b transition duration-300 ease-in-out text-3xl font-sans font-normal hover:bg-neutral-100 dark:border-lime-500 dark:hover:bg-emerald-600">
                  <td class="whitespace-nowrap px-6 py-4">Bachelor of Arts (BA)</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out text-xl font-sans font-light hover:bg-neutral-100 dark:border-lime-500 dark:hover:bg-emerald-600">
                  <td class="whitespace-nowrap px-6 py-4">College </td>
                  <td class="whitespace-nowrap px-6 py-4">Mar Ivanios College Trivandrum</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out text-xl font-sans font-light hover:bg-neutral-100 dark:border-lime-500 dark:hover:bg-emerald-600">
                  <td class="whitespace-nowrap px-6 py-4">Subject </td>
                  <td class="whitespace-nowrap px-6 py-4">History (BHIC)</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out text-xl font-sans font-light hover:bg-neutral-100 dark:border-lime-500 dark:hover:bg-emerald-600">
                  <td class="whitespace-nowrap px-6 py-4">Year </td>
                  <td class="whitespace-nowrap px-6 py-4">2020 - 2023</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out text-xl font-sans font-light hover:bg-neutral-100 dark:border-lime-500 dark:hover:bg-emerald-600">
                  <td class="whitespace-nowrap px-6 py-4">Location </td>
                  <td class="whitespace-nowrap px-6 py-4">Nalanchira, Trivandrum, Kerala</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
          <table class="min-w-full text-left text-sm font-light">
              <tbody>
                <tr
                  class="border-b transition duration-300 ease-in-out text-xl font-sans font-normal hover:bg-neutral-100 dark:border-lime-500 dark:hover:bg-emerald-600">
                  <td class="whitespace-nowrap px-6 py-4">Full Stack Web Development </td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out text-xl font-sans font-light hover:bg-neutral-100 dark:border-lime-500 dark:hover:bg-emerald-600">
                  <td class="whitespace-nowrap px-6 py-4">Institution </td>
                  <td class="whitespace-nowrap px-6 py-4">G-Tech Education</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out text-xl font-sans font-light hover:bg-neutral-100 dark:border-lime-500 dark:hover:bg-emerald-600">
                  <td class="whitespace-nowrap px-6 py-4">Language </td>
                  <td class="whitespace-nowrap px-6 py-4">Python & Django</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out text-xl font-sans font-light hover:bg-neutral-100 dark:border-lime-500 dark:hover:bg-emerald-600">
                  <td class="whitespace-nowrap px-6 py-4">Period </td>
                  <td class="whitespace-nowrap px-6 py-4">6 Months (Jul-2022 - Dec-2022)</td>
                </tr>
                <tr
                  class="border-b transition duration-300 ease-in-out text-xl font-sans font-light hover:bg-neutral-100 dark:border-lime-500 dark:hover:bg-emerald-600">
                  <td class="whitespace-nowrap px-6 py-4">Location </td>
                  <td class="whitespace-nowrap px-6 py-4">Nilamel, Kollam, Kerala</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-10 p-4 text-xl py-48 text-lime-500">
        <div>
  <p>C</p>
</div>
          <div>
            <p>D</p>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Education;