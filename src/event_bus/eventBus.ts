import mitt from "mitt";
/*type Events = {
  getProducts: { type: string };
  getProductsByCategory: string;
};*/
//const emitter = mitt<Events>();
const emitter = mitt();
export default emitter;
