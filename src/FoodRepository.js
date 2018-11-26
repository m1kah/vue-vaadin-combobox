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
            makeFood('Egg', '143', 0.3, 12.5, 10.3)
        ]
    }
    readAll() {
        return foods
    }

}

export default FoodRepository
