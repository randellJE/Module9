const axios = require('axios');

const gamesAPI = axios.create({
  baseURL: 'https://www.freetogame.com/api/games',
});

const getByPlatform = async (req, res) => {
  try {
    const { platform } = req.query;
    const response = await gamesAPI.get(`?platform=${platform}`);
    res.json({ result: 200, data: response.data });
  } catch (error) {
    console.error("Error fetching games by their platform:", error.message);
    res.status(500).json({ result: 500, error: error.message });
  }
};
// platforms = [
//   "pc", "browser", "all"
// ]

const getByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const response = await gamesAPI.get(`?category=${category}`);
    res.json({ result: 200, data: response.data });
  } catch (error) {
    console.error("Error fetching games by their category:", error.message);
    res.status(500).json({ result: 500, error: error.message });
  }
};
// categories = [
//     "mmorpg", "shooter", "strategy", "moba", 
//     "racing", "sports", "social", "sandbox",
//     "open-world", "survival", "pvp", "pve", 
//     "pixel", "voxel", "zombie", "turn-based",
//     "first-person", "third-Person", "top-down", "tank", 
//     "space", "sailing", "side-scroller", "superhero",
//     "permadeath", "card", "battle-royale", "mmo", 
//     "mmofps", "mmotps", "3d", "2d",
//     "anime", "fantasy", "sci-fi", "fighting", 
//     "action-rpg", "action", "military", "martial-arts",
//     "flight", "low-spec", "tower-defense", "horror", "mmorts"
// ];

module.exports = {
  getByPlatform,
  getByCategory
}