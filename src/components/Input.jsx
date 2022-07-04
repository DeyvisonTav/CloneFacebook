export function Input({ ...rest }) {
  return (
    <div>
      <input
        className="w-full flex-1 mb-2 md:mb-3 p-3 rounded md:rounded-md border border-gray-300 focus-visible:border-blue-500
        bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500"
        {...rest}
      />
    </div>
  )
}
