//REVIEW - i created this fn to isolate the functionallity of the calculate fn that resides in my cartContext, the problem is that i dont know how to perfom a proper integration test, i would also need to isolate/export the functionallity of checkRush() to be able to determine if the user has selected a rush time or not. Naturally i would like feedback on this issue, even if im not selected this would help me become a better developer.
export const calculate = (
  surchargeFee: number,
  deliveryFee: number,
  weightFee: number,
): number => {
  let fee = surchargeFee + deliveryFee + weightFee
  //if (checkRush()) fee = fee * 1.2
  if (fee > 14) fee = 15

  return fee
}
