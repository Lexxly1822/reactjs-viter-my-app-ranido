import React from "react";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiPencil,
  HiPlus,
} from "react-icons/hi";
import ModalAddTestimonials from "./ModalAddTestimonials";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import CardTestimonials from "../../../../partials/CardTestimonials";
import ModalDeleteTestimonials from "./ModalDeleteTestimonials";
import { FaList, FaPlus, FaTable } from "react-icons/fa";
import TestimonialsList from "./TestimonialsList";
import TestimonialsTable from "./TestimonialsTable";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [
    isModalTestimonials, //getter = get data
    setIsModalTestimonials, //setter = set data
  ] = React.useState(false);
  const [isDeleteTestimonials, setIsDeleteTestimonials] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isTable, setIsTable] = React.useState(false);
  const {
    isLoading,
    isFetching,
    error,
    data: dataTestimonials,
  } = useQueryData(
    `${apiVersion}/controllers/developer/testimonials/testimonials.php`,
    "get",
    "testimonials"
  );
  console.log(isTable);

  const handleToggleTable = () => {
    setIsTable(!isTable);
  };
  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteTestimonials(true);
  };

  const handleAdd = () => {
    setIsModalTestimonials(true);
  };
  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalTestimonials(true);
  };

  return (
    <>
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 ">
          <div className=" flex justify-center items-center mb-4 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-center">
                Client Testimonials
              </h2>
            </div>
            <button //9
              className="flex items-center gap-2 hover:underline hover:text-primary"
              type="button"
              onClick={handleToggleTable}
            >
              {isTable == true ? ( //15
                <>
                  <FaList className="size-3" />
                  List{" "}
                </>
              ) : (
                <>
                  <FaTable className="size-3" /> Table
                </>
              )}
            </button>

            <button
              className="tooltip flex gap-1"
              data-tooltip="Add"
              type="button"
              onClick={handleAdd}
            >
              <FaPlus className="size-3" /> Add
            </button>
          </div>

          {/* testimonials Slider */}
          {isTable == true ? (
            <>
              <TestimonialsTable //13
                isLoading={isLoading}
                isFetching={isFetching}
                error={error}
                dataTestimonials={dataTestimonials}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </>
          ) : (
            <TestimonialsList
              isLoading={isLoading}
              isFetching={isFetching}
              error={error}
              dataTestimonials={dataTestimonials}
              handleAdd={handleAdd}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            />
          )}

          {/* slides */}
          {/* <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <CardTestimonials
                  img={"images/testimonials-1.webp"}
                  alt={"Sarah Johnson"}
                  testimony={
                    "The team delivered our project ahead of schedule with exceptional quality. Our online sales increased by 120% within three months!"
                  }
                  name={"Sarah Johnson"}
                  position={" Marketing Direcotr, TechCorp"}
                />
                <CardTestimonials
                  img={"/images/testimonials-2.webp"}
                  alt={"Michael Chen image"}
                  testimony={
                    "From design to deployment, their attention to detail was impressive. They became true partners in our digital transformation journey."
                  }
                  name={"Michael Chen"}
                  position={"CEO, StartupHub"}
                />
                <CardTestimonials
                  img={"/images/testimonials-3.webp"}
                  alt={"Emma Rodriguez"}
                  testimony={
                    "Their SEO strategy tripled our organic traffic in 6 months. We've seen a dramatic improvement in lead quality and conversion rates."
                  }
                  name={"Emma Rodriguez"}
                  position={"CMO, GrowthSolutions"}
                />
              </div>
            </div> */}
        </div>
      </section>
      {isModalTestimonials && (
        <ModalAddTestimonials setIsModal={setIsModalTestimonials} />
      )}
      {isDeleteTestimonials && (
        <ModalDeleteTestimonials
          setModalDelete={setIsDeleteTestimonials}
          mysqlEndpoint={`${apiVersion}/controllers/developer/testimonials/testimonials.php?id=${itemEdit.web_services_aid}`}
          queryKey="testimonials"
        />
      )}
      ;
    </>
  );
};

export default Testimonials;
