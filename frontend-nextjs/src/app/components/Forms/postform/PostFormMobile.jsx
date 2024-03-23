import { useState } from "react";
import axios from "axios";
import { Input } from "@nextui-org/react";

const authorId = "e39f3c31-f20a-4790-8412-5f8ac9578253";
const categories = [
  "Food",
  "Doctor",
  "Hygiene",
  "Financial",
  "Clothing",
  "Employment",
  "Legal_Aid",
  "Dental",
  "Veterinary",
  "MentalHealth",
];

export function PostFormMobile() {
  const [form, setForm] = useState(null);
  const [chosenCategories, setChosenCategories] = useState([]);

  function chooseCategory(cat) {
    if (chosenCategories.includes(cat)) {
      setChosenCategories(chosenCategories.filter((item) => item !== cat));
    } else {
      setChosenCategories([...chosenCategories, cat]);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    if (form.expiresAt.value) {
      formData.set("expiresAt", new Date(form.expiresAt.value).toISOString());
    } else {
      formData.set("expiresAt", null);
    }

    formData.set("authorId", authorId);
    formData.set("category", JSON.stringify(chosenCategories));

    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        "http://localhost:3000/post/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <form
        className="rounded-xl w-[95%] flex flex-col space-y-4 "
        ref={(formRef) => setForm(formRef)}
        onSubmit={handleSubmit}
      >
        <Input
          size="lg"
          type="text"
          name="title"
          required
          placeholder="Title"
        />
        <input
          size="lg"
          className="w-full font-normal placeholder-zinc-500 bg-zinc-100 dark:bg-zinc-800  text-medium h-[200px] rounded-xl  px-3 "
          placeholder="Description goes here"
          name="content"
        />
        <div className="flex flex-row py-3 overflow-x-scroll scroll-smooth justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => chooseCategory(cat)}
              className={`${
                chosenCategories.includes(cat) ? "border-2 border-blue-500" : ""
              } flex flex-auto rounded-lg mx-2 px-2 py-1 text-zinc-500 bg-zinc-100 dark:bg-zinc-800`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* <Input size="lg" type="file" name="image" /> */}

        <Input type="file" name="file" />

        <Input
          size="lg"
          placeholder="Claim limits"
          type="number"
          required
          name="claimLimit"
        />
        <Input
          size="lg"
          placeholder="Expiration Date"
          type="date"
          name="expiresAt"
        />
        <div className="pt-5 flex justify-center">
          <button
            type="submit"
            className="p-2 py-3 px-3 text-base font-semibold  bg-primary-500 rounded-md border border-primary-300 hover:border-primary-500 hover:bg-primary-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
