import Image from "next/image";
import { GetProductInfo } from "./actions";
import ProductIdForm from "./components/ProductIdForm";
export default function Home() {
  return (
    <main>
      <div>
        <ProductIdForm />
      </div>
    </main>
  );
}
