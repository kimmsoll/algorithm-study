function solution(nums, hand) {
    const phone = [[3,1],[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
    let left = [3,0];
    let right = [3,2];
    let answer = "";
    
    nums.forEach((num)=>{
        if([1,4,7].includes(num)){
            left = phone[num];
            answer += "L";
        }else if([3,6,9].includes(num)){
            right = phone[num];
            answer += "R";
        }else{
            let left_cnt = Math.abs(phone[num][0]-left[0]) + Math.abs(phone[num][1]-left[1]);
            let right_cnt = Math.abs(phone[num][0]-right[0]) + Math.abs(phone[num][1]-right[1]);
            if(left_cnt > right_cnt){
                    right = phone[num];
                    answer += "R";
            }else if(left_cnt < right_cnt){
                    left = phone[num];
                    answer += "L";
            }else{
                if(hand === "left"){
                    left = phone[num];
                    answer += "L";
                } else if(hand === "right") {
                    right = phone[num];
                    answer += "R";
                }
            }
        }
    });
    return answer;
}