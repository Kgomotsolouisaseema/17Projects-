class UserDirectory {
  constructor(options) {
    const {
      apiUrl,
      userMapperFn,
      displaySelector,
      filterSelector,
      storageKey = "userData",
    } = options;
    this.apiUrl = apiUrl;
    this.userMapperFn = userMapperFn;
    this.storageKey = storageKey;
    this.displayElement = document.querySelector(displaySelector);
    this.filterElement = document.querySelector(filterSelector);

    this.initialise();
  }

  initialise() {
    this.loadData().then((users) => {
      console.log(users);
    });
  }

  loadData() {
    const storedUserData = JSON.parse(localStorage.getItem(this.storageKey));

    if (storedUserData) {
      return new Promise((resolve, reject) => resolve(storedUserData)).then(
        (users) => {
          this.users = users;

          return users;
        }
      );
    }

    return fetch(this.apiUrl)
      .then((response) => response.json())  //Baked cookies (raw data)
      .then(results => this.userMapperFn(results)) //decorate cookies (transform raw data )
      .then((users) => {
        this.users = users; //store decorated cookies in a jar 
        localStorage.setItem(this.storageKey, JSON.stringify(users)); //label the jar 
        return users;  // retrun the jar of decorated cookies 
      });
  }
}

const userDirectory = new UserDirectory({
  apiUrl: "https://dummyjson.com/users",
  userMapperFn: (userData) => {
    return userData.users.map(({ firstName, lastName, birthDate, image, phone, email }) => {
        const userObj = {
          name: `${firstName} ${lastName}`,
          birthDate,
          phone,
          email,
          photo: image,
        }

        return userObj;

      });

  },
  displaySelector: "#userTable",
  filterSelector: "#filterUsers",
});
console.log(userDirectory);
