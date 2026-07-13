import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

const Dynamic_Product = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/products/${slug}`
      );

      setProduct(res.data.data);
    } catch (err) {
      console.log(err);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#fafafa]">
        <div className="dp-spinner" />
      </div>
    );
  }

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="dp-page">
      <style>{`
        .dp-page {
          background: #f6f6f4;
          padding: 64px 20px 96px;
          min-height: 100vh;
        }
        .dp-container {
          max-width: 1300px;
          margin: 0 auto;
        }
        .dp-spinner {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 3px solid #ffe0c2;
          border-top-color: #ff6b00;
          animation: dp-spin 0.8s linear infinite;
        }
        @keyframes dp-spin {
          to { transform: rotate(360deg); }
        }

        /* Header */
        .dp-header {
          position: relative;
          padding-bottom: 40px;
          margin-bottom: 56px;
          border-bottom: 1px solid #e8e6e1;
        }
        .dp-category {
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ff6b00;
          margin-bottom: 18px;
        }
        .dp-title {
          text-align: center;
          font-weight: 800;
          font-size: clamp(30px, 5.6vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #1c1b19;
          margin: 0 auto;
          max-width: 900px;
        }
        .dp-tagline-wrap {
          display: flex;
          justify-content: flex-end;
          margin-top: 22px;
        }
        .dp-tagline {
          font-style: italic;
          font-size: 18px;
          color: #8a8880;
          max-width: 420px;
          text-align: right;
        }

        /* Body — renders the admin's TipTap content exactly as authored, in order */
        .dp-body {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(20, 20, 20, 0.06);
          padding: 44px;
        }

        .dp-content {
          font-size: 18px;
          line-height: 1.9;
          color: #3d3b36;
        }
        .dp-content > *:first-child {
          margin-top: 0;
        }
        .dp-content > *:last-child {
          margin-bottom: 0;
        }
        .dp-content p {
          margin: 0 0 18px;
        }
        .dp-content h1,
        .dp-content h2,
        .dp-content h3,
        .dp-content h4 {
          font-weight: 700;
          color: #1c1b19;
          margin: 28px 0 14px;
        }
        .dp-content h1 { font-size: 36px; }
        .dp-content h2 { font-size: 32px; }
        .dp-content h3 { font-size: 26px; }
        .dp-content h4 { font-size: 20px; }
        .dp-content ul,
        .dp-content ol {
          margin: 0 0 18px;
          padding-left: 24px;
        }
        .dp-content ul { list-style: disc; }
        .dp-content ol { list-style: decimal; }
        .dp-content ul ul,
        .dp-content ol ul { list-style: circle; }
        .dp-content li {
          margin-bottom: 8px;
        }
        .dp-content li > ul,
        .dp-content li > ol {
          margin-top: 8px;
        }
        .dp-content img {
          max-width: 100%;
          height: auto;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(20, 20, 20, 0.10);
          margin: 12px 0;
        }
        .dp-content a {
          color: #ff6b00;
          text-decoration: underline;
        }
        .dp-content blockquote {
          border-left: 4px solid #ff6b00;
          margin: 0 0 18px;
          padding: 4px 0 4px 18px;
          color: #6b6a63;
          font-style: italic;
        }

        /* Tables — styled but structure/order preserved exactly as authored */
        .dp-content table {
          width: 100%;
          border-collapse: collapse;
          font-size: 16px;
          margin: 12px 0 24px;
          display: block;
          overflow-x: auto;
        }
        .dp-content thead th {
          background: #ff6b00;
          color: #ffffff;
          text-align: left;
          padding: 12px 14px;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 0.04em;
        }
        .dp-content td,
        .dp-content th {
          border: 1px solid #ececea;
          padding: 12px 14px;
        }
        .dp-content tbody tr:nth-child(even) {
          background: #fafaf9;
        }
        .dp-content tbody tr:hover {
          background: #fff6ee;
        }

        @media (max-width: 640px) {
          .dp-body {
            padding: 26px;
          }
          .dp-tagline-wrap {
            justify-content: center;
          }
          .dp-tagline {
            text-align: center;
          }
        }
      `}</style>

      <div className="dp-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* ---------------- HEADER (identical on every product page) ---------------- */}
          <div className="dp-header">
            {product.hasCategory && product.category && (
              <div className="dp-category">{product.category.name}</div>
            )}

            <h1 className="dp-title">{product.name}</h1>

            {product.tagline && (
              <div className="dp-tagline-wrap">
                <p className="dp-tagline">{product.tagline}</p>
              </div>
            )}
          </div>

          {/* ---------------- BODY — rendered exactly as the admin composed it in TipTap ---------------- */}
          <div className="dp-body">
            <div
              className="dp-content"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dynamic_Product;
