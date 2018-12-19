class Github {
  constructor() {
    this.client_id = '21d3f9f37ff02067e771';
    this.client_secret = 'dab3273c20c4fc9a21c3f540dd4539d9cd6d0ef7';
  }

 async getUser(user) {
   const profileResponse = await fetch(`https://api.github.com/users/${user}?client id=${this.client_id}&client_secret=${this.client_secret}`);

   const profile = await profileResponse.json();

   return {
    profile
   }
 }
}