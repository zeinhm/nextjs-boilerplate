import Button from "@/components/Button";
import TemplateAuthenticated from "@/components/templates/TemplateAuthenticated";
import { decrement, increment } from "@/redux/slices/counter";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const inc = () => dispatch(increment());
  const dec = () => dispatch(decrement());

  return (
    <TemplateAuthenticated>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="text-5xl font-bold">{count}</div>
        <div className="flex items-center space-x-8 mt-8">
          <Button onClick={inc}>Add</Button>
          <Button onClick={dec}>Remove</Button>
        </div>
      </div>
    </TemplateAuthenticated>
  );
};

export default Home;
