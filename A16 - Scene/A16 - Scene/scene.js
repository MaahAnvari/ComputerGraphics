
function transalationMatrix (item) {
	return utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
			utils.MakeTranslateMatrix(item[0], item[1], item[2]),
			utils.MakeRotateZMatrix(item[5])),
			utils.MakeRotateXMatrix(item[3])),
			utils.MakeRotateYMatrix(item[4])
	)
}

function drawSceneTree(S) {
	const stack = []

	stack.push(transalationMatrix(S[0]))

	for (let i = 1; i <= 5; i++) {
		stack.push(utils.multiplyMatrices(stack[0], transalationMatrix(S[i])))
	}

	for (let i = 6; i < S.length; i++) {
		stack.push(utils.multiplyMatrices(stack[i - 5], transalationMatrix(S[i])))
	}

	for(let i = 0; i < S.length; i++) {

		draw(i, stack[i])
	}
}