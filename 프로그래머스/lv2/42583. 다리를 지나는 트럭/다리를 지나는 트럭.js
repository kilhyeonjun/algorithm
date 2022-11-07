function solution(bridge_length, weight, truck_weights) {
    let queue = new Array(bridge_length).fill(0);
    let truck_weigth = 0, cnt = bridge_length;
    while(truck_weights.length){
        queue.shift();
        truck_weigth = 0;
        if(weight >= queue.reduce((sum, v) => sum + v, truck_weights[0]))
            truck_weigth = truck_weights.shift();   
        queue.push(truck_weigth);
        cnt++;
    }
    return cnt;
}