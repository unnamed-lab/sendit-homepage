import Image from "next/image";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Sendit Market - Sell Everything, Buy Everything";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #0a1118, #0f1923)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Teachers, Inter, sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 25% 25%, rgba(0, 255, 200, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 255, 200, 0.2) 0%, rgba(0, 255, 200, 0) 70%)",
            zIndex: 2,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            padding: "2rem",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Image src={"./logo"} alt="Logo" width={50} height={50} />
          </div>

          <h1
            style={{
              fontSize: 72,
              fontWeight: "bold",
              margin: "20px 0",
              background: "linear-gradient(to right, #46847a, #4469e5)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Digital Marketplace
          </h1>

          <p
            style={{
              fontSize: 32,
              color: "#e0e0e0",
              maxWidth: 800,
              marginBottom: 40,
            }}
          >
            Sell Everything, Buy Everything with Crypto
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 20,
            }}
          >
            {[
              "Web Templates",
              "Design Assets",
              "Trading Tools",
              "Digital Products",
            ].map((category, i) => (
              <div
                key={i}
                style={{
                  padding: "12px 24px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 8,
                  fontSize: 20,
                }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "#a0a0a0",
          }}
        >
          sendit-homepage.onrender.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
