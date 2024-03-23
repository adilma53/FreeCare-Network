import { useState } from "react";
import axios from "axios";
import { Button, Input } from "@nextui-org/react";

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

    formData.append("image", formRef.current.image.files[0]);
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
        "http://localhost:4000/post/create",
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
    <div className="h-screen flex flex-col items-center mt-20">
      <form
        className="p-4  w-[95%] flex flex-col space-y-4  rounded-3xl border border-zinc-300 dark:border-zinc-600"
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
          className="focus:outline-none w-full font-normal placeholder-zinc-500 bg-zinc-100 dark:bg-zinc-800  text-medium h-[200px] rounded-2xl  px-3 "
          placeholder="Description goes here"
          name="content"
        />
        <div className="flex flex-row py-3 overflow-x-scroll scroll-smooth justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => chooseCategory(cat)}
              className={`${chosenCategories.includes(cat)
                  ? "border-2 border-primary-500 "
                  : ""
                } flex flex-auto rounded-lg mx-2 px-2 py-1 text-zinc-500 bg-zinc-100 dark:bg-zinc-800`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* <Input size="lg" type="file" name="image" /> */}

        <Input type="file" name="image" />

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
        <Button type="submit" size="lg" color="primary" variant="bordered" radius="small">
          Create Post
        </Button>
      </form>
    </div>
  );
}
