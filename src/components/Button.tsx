const Button = ({ costume }: { costume: string }) => (
  <button
    className={`bg-gradient-to-r from-green-400 to-teal-500 text-white px-12 py-4 rounded-full font-semibold  hover:from-green-300 hover:to-teal-300 transition-all duration-300 ${costume}`}
  >
    Request Invite
  </button>
);

export default Button;
