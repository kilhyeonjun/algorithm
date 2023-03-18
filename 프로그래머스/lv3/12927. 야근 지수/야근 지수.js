function solution(n, works) {
    let answer = 0;
    works.sort((a, b)=>b-a);
    const maxHeap = new MaxHeap(works);
    while(n !== 0) {
        maxHeap.push(maxHeap.pop() - 1);
        n--;
    }
    console.log(maxHeap.data)
    for(let i=0; i<maxHeap.data.length; i++){
        if(maxHeap.data[i]>0) answer+=maxHeap.data[i]**2;
    }
    return answer;
}

class MaxHeap {
    constructor(data){
        this.data = data || [];
    }
    
    swap(i, j){
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    
    push(item){
        this.data.push(item);
        let index = this.data.length - 1;
        while(index !== 0){
            let parentIndex = Math.floor((index-1)/2);
            if(this.data[parentIndex] >= this.data[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    pop(){
        if(this.data.length === 1) return this.data.pop();
        
        this.swap(0, this.data.length-1);
        const max = this.data.pop();
        let index = 0;
        while(index < this.data.length - 1){
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            let swapIndex = index;
            
            if(this.data[swapIndex] < this.data[leftIndex]) swapIndex = leftIndex;
            if(this.data[swapIndex] < this.data[rightIndex]) swapIndex = rightIndex;
            if(index === swapIndex) break;
            this.swap(index, swapIndex);
            index = swapIndex;
        }
        return max
    }
}