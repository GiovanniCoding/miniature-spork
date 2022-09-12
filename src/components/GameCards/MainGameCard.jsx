export const MainGameCard = () => {
  return (
    // Card to show the selected's game info
    <div className="max-w-[70rem] mx-auto">
      <div className="mx-8 flex border rounded-lg bg-[#006d77] mobile:flex-col">
        <figure className="min-w-[150px] h-[200px] mx-4 mb-2 mt-4">
          <img
            src={'https://imgs.search.brave.com/KlXJS3E3ZGvBJx5uktgKn8l0w1_0P0Qs4ddib0kIOPs/rs:fit:1200:768:1/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzL2FjZDc4/MS9tYXJpby1rYXJ0/LTgtZGVsdXhlLzEz/NjZfMjAwMC5qcGc'}
            alt="Mario Kart 8 Delux"
            className="w-full h-full object-cover rounded-bl-3xl rounded-tr-3xl"
          />
        </figure>
        <div className="my-4 mr-4 mobile:m-4">
          <div>
            <div className="flex mobile:flex-col justify-between mb-4">
              <h1 className="text-2xl text-white ml-6">Mario Kart 8 Deluxe</h1>
              <h2 className="text-sm text-gray-100 italic ml-6">28th Apr 2017</h2>
            </div>
            <p className="bg-[#138089] p-2 text-gray-50 rounded-md max-h-[8rem] overflow-hidden text-justify">Mario Kart 8 Deluxe (JP) (also called MK8D or MK8DX) is an expanded version of the 2014 Wii U racing game, Mario Kart 8, for the Nintendo Switch that was released on April 28, 2017. It includes all the original content and its DLC alongside new features, including a revised Battle Mode much similar to past games, minor gameplay changes, some new items, and several new characters like the Inkling.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
