import React, { useState } from "react";
import { useParams } from "react-router-dom";
import basmatiBanner from "../assets/Basmati Banner.png";
import nonBasmatiBanner from "../assets/Non Basmati Banner.png";
import southIndianBanner from "../assets/South Indian Banner.png";
import image1 from "../assets/1.jpeg"
import image2 from "../assets/2.jpeg"
import image3 from "../assets/3.jpeg"
import image4 from "../assets/4.jpeg"
import image5 from "../assets/5.jpeg"
import image6 from "../assets/6.jpeg"
import image7 from "../assets/7.jpeg"
import image8 from "../assets/8.jpeg"
import image9 from "../assets/9.jpeg"
import image10 from "../assets/10.jpeg"
import image11 from "../assets/11.jpeg"
import image12 from "../assets/12.jpeg"
import image13 from "../assets/13.jpeg"
import image14 from "../assets/14.jpeg"
import image15 from "../assets/15.jpeg"
import image16 from "../assets/16.jpeg"
import image17 from "../assets/17.jpeg"
import image18 from "../assets/18.jpg"
import image19 from "../assets/19.jpg"
import image20 from "../assets/20.jpg"
import image21 from "../assets/21.jpg"
import image22 from "../assets/22.jpg"
import image23 from "../assets/23.jpg"
import image24 from "../assets/24.jpg"

// Sample Product Data
const productData: Record<string, { name: string; image: string }[]> = {
  Basmati: [
    { name: "Basmati Premium", image: image9 },
    { name: "Golden Basmati", image: image10 },
    { name: "Taj Mahal Basmati", image: image11 },
    { name: "Extra Long Basmati", image: image12 },
    { name: "Royal Basmati", image: image13 },
    { name: "Organic Basmati", image: image14 },
    { name: "Brown Basmati", image: image15 },
    { name: "Classic Basmati", image: image16 },
  ],
  NonBasmati: [
    { name: "Sona Masoori", image: image1 },
    { name: "IR64 Rice", image: image2 },
    { name: "Ponni Rice", image: image3 },
    { name: "Kolam Rice", image: image4 },
    { name: "Gobindo Bhog", image: image5 },
    { name: "Jeera Samba", image: image6 },
    { name: "Matta Rice", image: image7 },
    { name: "Swarna Rice", image: image8 },
  ],
  SouthIndian: [
    { name: "NeiKitchadi Ponni Boiled Rice", image: image17 },
    { name: "Manachanallur Ponni Rice", image: image18 },
    { name: "Rajabhogam Ponni Boiled Rice", image: image19 },
    { name: "VIP Special Ponni Boiled Rice", image: image20 },
    { name: "Akshaya Ponni Boiled Rice", image: image21 },
    { name: "Tanjore Ponni Boiled Rice", image: image22 },
    { name: "Classic Ponni Boiled Rice", image: image23 },
    { name: "Premium Ponni Boiled Rice", image: image24 },
  ],
};

const ProductDetails: React.FC = () => {
  const { productType } = useParams<{ productType?: string }>();
  const [showModal, setShowModal] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [selectedRice, setSelectedRice] = useState("");
  const [message, setMessage] = useState("Can I get the details about this variety of rice?");

  // ✅ Now getBannerImage() is using the correct productType
  const getBannerImage = () => {
    switch (productType) {
      case "Basmati":
        return basmatiBanner;
      case "NonBasmati":
        return nonBasmatiBanner;
      case "SouthIndian":
        return southIndianBanner;
      default:
        return "";
    }
  };

  if (!productType || !productData[productType]) {
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold">Product Not Found</h2>
        <p className="text-lg mt-4">Please select a valid product category.</p>
      </section>
    );
  }

  const products = productData[productType];

  const handleCardClick = (productName: string) => {
    // setSelectedProduct(productName);
    setSelectedRice(productName);
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = "alphiyapaul003@gmail.com";
    const subject = `Rice Inquiry - ${selectedRice}`;
    const body = `Hello,\n\nMy name is ${userName}. I am interested in learning more about ${selectedRice}.\n\nMessage: ${message}\n\nYou can contact me at: ${userEmail}.\n\nThank you!`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowModal(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      {/* ✅ Banner Section */}
      <div className="w-full mb-10">
        <img
          src={getBannerImage()}
          alt={`${productType} Banner`}
          className="w-full h-auto object-cover"
        />
      </div>


      <div className="container mx-auto px-6">
        {/* <h2 className="text-3xl font-bold text-center mb-8">{productType} Rice</h2> */}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(product.name)}
              className="cursor-pointer bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center transition-transform duration-200 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <h3 className="text-base font-semibold">{product.name}</h3>
            </div>

          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-center mb-4">Inquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <select
                value={selectedRice}
                onChange={(e) => setSelectedRice(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="" disabled>Select Rice Variety</option>
                {Object.values(productData)
                  .flat()
                  .map((product, idx) => (
                    <option key={idx} value={product.name}>
                      {product.name}
                    </option>
                  ))}
              </select>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded h-24"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
