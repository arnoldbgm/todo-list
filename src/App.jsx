import { TodoListCategory } from "./components";
import { categories } from "./core/category";
export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl">Manage your time well</h1>
      <div className="my-6">
        <h2 className="font-semibold">Categories</h2>
        <div className="flex mt-3 justify-between">
          {categories.map((category) => (
            <TodoListCategory
              key={category.text}
              icon={category.icon}
              text={category.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
