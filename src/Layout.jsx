import Navbar from "./Navbar";
import BackgroundFX from "./BackgroundFX";

export default function Layout({ children }) {
  return (
    <div style={styles.appWrapper}>
      {/* GLOBAL BACKGROUND */}
      <BackgroundFX />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main style={styles.main}>
        {children}
      </main>
    </div>
  );
}

const styles = {
  appWrapper: {
    width: "100%",
    minHeight: "100vh",
    background: "#000",
    position: "relative",
    overflowX: "hidden"
  },

  main: {
    width: "100%",
    minHeight: "100vh",
    position: "relative",
    zIndex: 2
  }
};