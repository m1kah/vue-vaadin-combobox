import _ from 'lodash'

function makeFood(name, energy, carbs, proteins, fats) {
    return {
        name,
        energy,
        carbs,
        proteins,
        fats
    }
}

class FoodRepository {
    constructor() {
        self.foods = [
            makeFood('Egg', 143, 0.3, 12.6, 9.2),
            makeFood('Ground Soy', 334, 20.9, 49.2, 2.4),
            makeFood('Tofu', 82, 1.6, 8.1, 4.8),
            makeFood('Ground Fava Bean', 331, 42.2, 28.5, 1.9),
            makeFood('Pulled Oats', 201, 8.1, 30.0, 4.4),
        ]
    }
    readAll() {
        return foods
    }

}

export default FoodRepository
