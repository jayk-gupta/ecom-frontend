import { Link } from "react-router-dom";


const images = [
  {
    title: "Face",
    src: "/categories/face.webp", 
    url:"/face/blush"
  },
  {
    title: "Eyes",
    src: "/categories/eyes.webp", 
    url:"/eyes/eyebrow"
  },
  {
    title: "Lips",
    src: "/categories/lips.webp", 
    url:"/lips/lip_liner"
  },
  {
    title: "Nails",
    src: "/categories/nails.webp",
    url: "/nails/nail_polish"
  },
];

function Categories() {
  return (
    <div className="categories mb-12 md:px-12 sm:px-6 px-4">
      <h2 className="sm:text-4xl text-xl py-6 font-bold text-center">
        Shop by Category
      </h2>
      <div className="flex gap-4">
        {images.map((img) => (
          <div className="rounded-lg  relative overflow-clip" key={img.title}>
            <Link to={`/products${img.url}`}>
              <img
                className="rounded-lg hover:scale-110 duration-300 ease-in-out "
                src={img.src}
                alt={img.title}
              />
            </Link>
            <p className="sm:px-4 absolute top-2 left-0 bg-c text-white bg-[#E80071] rounded-r-full sm:text-lg text-sm px-2">
              {img.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
