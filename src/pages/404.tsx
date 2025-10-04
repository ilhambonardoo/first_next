import Link from "next/link";

const Costume404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center px-6">
      <img src="/404.svg" alt="404" className="w-lg h-44 mb-4" />
      <h1 className="text-3xl md:text-4xl font-bold text-white">
        Sepertinya Anda Tersesat
      </h1>
      <p className="mt-4 text-lg || 404 Not Foundtext-gray-600">
        Tapi jangan khawatir, kami akan membantu Anda menemukan jalan kembali.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block px-8 py-3 text-lg font-semibold text-black bg-gray-400 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out"
      >
        Kembali ke Jalan yang Benar
      </Link>
    </div>
  );
};

export default Costume404;
