export const MainGameCard = () => {
  return (
    // Card to show the selected's game info
    <>
      {/* <div className="max-w-[70rem] mx-auto bg-[#006d77]">
        <div className="flex mx-8 border-solid rounded-lg border-gray-400 border-2">
          <div className="w-[30rem] overflow-hidden mx-4 my-2 rounded-bl-3xl rounded-tr-3xl">
            <img
              src={'https://imgs.search.brave.com/KlXJS3E3ZGvBJx5uktgKn8l0w1_0P0Qs4ddib0kIOPs/rs:fit:1200:768:1/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzL2FjZDc4/MS9tYXJpby1rYXJ0/LTgtZGVsdXhlLzEz/NjZfMjAwMC5qcGc'}
              alt="Mario Kart"
              className="max-w-[22rem] w-auto h-auto"
            />
          </div>
          <div className="my-6 mr-6">
            <div className="flex justify-between">
              <h1 className="text-teal-800 font-semibold text-2xl mb-2">Mario Kart</h1>
              <p className="italic text-xs text-gray-400 my-auto mr-4">28th Apr 2017</p>
            </div>
            <p className="bg-[#006d77] p-4 rounded-lg">Mario Kart 8 Deluxe (JP) (also called MK8D or MK8DX) is an expanded version of the 2014 Wii U racing game, Mario Kart 8, for the Nintendo Switch that was released on April 28, 2017. It includes all the original content and its DLC alongside new features, including a revised Battle Mode much similar to past games, minor gameplay changes, some new items, and several new characters like the Inkling.</p>
          </div>
        </div>
      </div> */}

    <div className="max-w-[70rem] mx-auto">
      <div className="mx-8 flex border rounded-lg bg-[#006d77]">
        <figure className="min-w-[150px] h-[200px] mx-4 my-2">
          <img
            src={'https://imgs.search.brave.com/KlXJS3E3ZGvBJx5uktgKn8l0w1_0P0Qs4ddib0kIOPs/rs:fit:1200:768:1/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzL2FjZDc4/MS9tYXJpby1rYXJ0/LTgtZGVsdXhlLzEz/NjZfMjAwMC5qcGc'}
            alt="Mario Kart 8 Delux"
            className="w-full h-full object-cover rounded-bl-3xl rounded-tr-3xl"
          />
        </figure>
        <div className="my-4 mr-4">
          <div>
            <div className="flex justify-between mb-4">
              <h1 className="text-2xl text-white">Mario Kart 8 Deluxe</h1>
              <h2 className="text-sm text-gray-100">28th Apr 2017</h2>
            </div>
            <p className="bg-[#138089] p-2 text-gray-50">Mario Kart 8 Deluxe (JP) (also called MK8D or MK8DX) is an expanded version of the 2014 Wii U racing game, Mario Kart 8, for the Nintendo Switch that was released on April 28, 2017. It includes all the original content and its DLC alongside new features, including a revised Battle Mode much similar to past games, minor gameplay changes, some new items, and several new characters like the Inkling.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
