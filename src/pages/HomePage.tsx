export const HomePage = () => {
  return (
      <div className="container mx-auto px-4 text-white pt-7">
          <div className="flex flex-col items-center text-6xl font-harrypotter">
              <h1 className="m-0">Hello Stranger!</h1>
              <p className="m-0 mt-2">Choose your Hogwarts House!</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-8 gap-6">
              <div className="flex flex-col items-center space-y-2">
                  <img
                      src="/assets/gryffindor.png"
                      alt="Gryffindor house crest"
                      className="h-[400px] object-contain"
                      loading="lazy"
                  />
                  <h2 className="font-harrypotter text-2xl text-center m-0">
                      “Their daring, nerve and chivalry set Gryffindors apart.”
                  </h2>
                  <h2 className="font-harrypotter text-3xl text-center m-0">
                      Courage, bravery, chivalry
                  </h2>
              </div>
              <div className="flex flex-col items-center space-y-2">
                  <img
                      src="/assets/slytherin.png"
                      alt="Slytherin house crest"
                      className="h-[400px] object-contain"
                      loading="lazy"
                  />
                  <h2 className="font-harrypotter text-2xl text-center m-0">
                      “Those cunning folk use any means to achieve their ends.”
                  </h2>
                  <h2 className="font-harrypotter text-3xl text-center m-0">
                      Ambition, resourcefulness, cunning
                  </h2>
              </div>
              <div className="flex flex-col items-center space-y-2">
                  <img
                      src="/assets/ravenclaw.png"
                      alt="Ravenclaw house crest"
                      className="h-[400px] object-contain"
                      loading="lazy"
                  />
                  <h2 className="font-harrypotter text-2xl text-center m-0">
                      “Wit beyond measure is man’s greatest treasure.”
                  </h2>
                  <h2 className="font-harrypotter text-3xl text-center m-0">
                      Intelligence, creativity, wisdom
                  </h2>
              </div>
              <div className="flex flex-col items-center space-y-2">
                  <img
                      src="/assets/hufflepuff.png"
                      alt="Hufflepuff house crest"
                      className="h-[400px] object-contain"
                      loading="lazy"
                  />
                  <h2 className="font-harrypotter text-2xl text-center m-0">
                      “Those patient Hufflepuffs are true and unafraid of toil.”
                  </h2>
                  <h2 className="font-harrypotter text-3xl text-center m-0 ">
                      Loyalty, patience, fair play
                  </h2>
              </div>
          </div>
      </div>
  );
};

export default HomePage;