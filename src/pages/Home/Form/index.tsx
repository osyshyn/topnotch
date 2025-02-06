export const Form = () => {
    return(
        <div className=" px-6 py-16 bg-brand-black w-full">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-brand-title text-[48px] font-[700] text-white mb-8">Begin Your Journey Today</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
}