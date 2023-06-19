import cartReducer, { addToCart, deleteToCart } from './index';
import store from '../..';
describe('cartSlice', () => {
    it('should handle increment of products', async () => {
        const product = {
            id: 1,
            name: "Celular Tecno Spark 10 Pro 256Gb 8Gb+8Gb Ram Negro",
            price: 779900,
            imagesUrl: [
                "/images/productsImages/tecnoSpark.png",
                "/images/productsImages/tecnoSparkBig.png"
            ],
            category: "Celulares",
            description: "El espectacular Tecno Spark 10 Pro, es el futuro del rendimiento en terminales móviles con esta generación que te permite alcanzar hasta 18 GB de memoria RAM, sumando 8 GB de memoria virtual a la pre instalada de 8 GB, eso te brindará una respuesta en su funcionamiento que difícilmente pueda ser igualada por otro móvil de su categoría; su increíble capacidad de procesamiento contrasta con unas maravillosas cámaras con un registro asombroso y un diseño exterior espectacular que guarda su súper batería de 5000 mAh para que pases muchísimas horas sin tener que recargar. Es liviano, robusto y potente y tiene todos para las exigencias de hoy, desde los juego en línea más demandantes, hasta la grabación de video en altísima calidad, no pierdas la oportunidad de adquirir un móvil insuperable."

        }
        const initialState = {
            productsCart: [],
            totalPrice: 0,
        };
        const nextState = cartReducer(initialState, store.dispatch(addToCart({ product })))
        expect(nextState).toEqual({
            productsCart: [{
                id: 1,
                name: "Celular Tecno Spark 10 Pro 256Gb 8Gb+8Gb Ram Negro",
                price: 779900,
                imagesUrl: [
                    "/images/productsImages/tecnoSpark.png",
                    "/images/productsImages/tecnoSparkBig.png"
                ],
                category: "Celulares",
                quantity: 1,
                description: "El espectacular Tecno Spark 10 Pro, es el futuro del rendimiento en terminales móviles con esta generación que te permite alcanzar hasta 18 GB de memoria RAM, sumando 8 GB de memoria virtual a la pre instalada de 8 GB, eso te brindará una respuesta en su funcionamiento que difícilmente pueda ser igualada por otro móvil de su categoría; su increíble capacidad de procesamiento contrasta con unas maravillosas cámaras con un registro asombroso y un diseño exterior espectacular que guarda su súper batería de 5000 mAh para que pases muchísimas horas sin tener que recargar. Es liviano, robusto y potente y tiene todos para las exigencias de hoy, desde los juego en línea más demandantes, hasta la grabación de video en altísima calidad, no pierdas la oportunidad de adquirir un móvil insuperable."

            }],
            totalPrice: 779900,
        });
    });

    it('should handle decrement of products', () => {

        const product = {
            id: 1,
            name: "Celular Tecno Spark 10 Pro 256Gb 8Gb+8Gb Ram Negro",
            price: 779900,
            imagesUrl: [
                "/images/productsImages/tecnoSpark.png",
                "/images/productsImages/tecnoSparkBig.png"
            ],
            category: "Celulares",
            quantity: 1,
            description: "El espectacular Tecno Spark 10 Pro, es el futuro del rendimiento en terminales móviles con esta generación que te permite alcanzar hasta 18 GB de memoria RAM, sumando 8 GB de memoria virtual a la pre instalada de 8 GB, eso te brindará una respuesta en su funcionamiento que difícilmente pueda ser igualada por otro móvil de su categoría; su increíble capacidad de procesamiento contrasta con unas maravillosas cámaras con un registro asombroso y un diseño exterior espectacular que guarda su súper batería de 5000 mAh para que pases muchísimas horas sin tener que recargar. Es liviano, robusto y potente y tiene todos para las exigencias de hoy, desde los juego en línea más demandantes, hasta la grabación de video en altísima calidad, no pierdas la oportunidad de adquirir un móvil insuperable."

        }
        const initialState = {
            productsCart: [product],
            totalPrice: 779900,
        };
        const nextState = cartReducer(initialState, store.dispatch(deleteToCart({ product })))
        expect(nextState).toEqual({
            productsCart: [],
            totalPrice: 0,
        });
    });
    it('after delete product should conserve initial state', () => {

        const product = {
            id: 1,
            name: "Celular Tecno Spark 10 Pro 256Gb 8Gb+8Gb Ram Negro",
            price: 779900,
            imagesUrl: [
                "/images/productsImages/tecnoSpark.png",
                "/images/productsImages/tecnoSparkBig.png"
            ],
            category: "Celulares",
            quantity: 1,
            description: "El espectacular Tecno Spark 10 Pro, es el futuro del rendimiento en terminales móviles con esta generación que te permite alcanzar hasta 18 GB de memoria RAM, sumando 8 GB de memoria virtual a la pre instalada de 8 GB, eso te brindará una respuesta en su funcionamiento que difícilmente pueda ser igualada por otro móvil de su categoría; su increíble capacidad de procesamiento contrasta con unas maravillosas cámaras con un registro asombroso y un diseño exterior espectacular que guarda su súper batería de 5000 mAh para que pases muchísimas horas sin tener que recargar. Es liviano, robusto y potente y tiene todos para las exigencias de hoy, desde los juego en línea más demandantes, hasta la grabación de video en altísima calidad, no pierdas la oportunidad de adquirir un móvil insuperable."

        }
        const initialState = {
            productsCart: [],
            totalPrice: 0,
        };
        const nextState = cartReducer(initialState, store.dispatch(deleteToCart({ product })))
        expect(nextState).toEqual({
            productsCart: [],
            totalPrice: 0,
        });
    });
});