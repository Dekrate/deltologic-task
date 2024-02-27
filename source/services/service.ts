function trap(height: number[]): number {
    const n: number = height.length;
    if (n <= 2) {
        return 0;
    }

    const leftMax: number[] = new Array(n);
    const rightMax: number[] = new Array(n);

    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let trappedWater: number = 0;
    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return trappedWater;
}