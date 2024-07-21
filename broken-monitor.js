function layout() {
    return {
        name: "Broken monitor",
        getFrameAssignments: (windows, screenFrame) => {
            const leftPaneWidth = 2000;
            const crackWidth = 460;
            const rightPaneWidth = screenFrame.width - leftPaneWidth - crackWidth;
            const rightWindowsHeight = screenFrame.height / (windows.length - 1);

            const frames = windows.map((window, index) => {
                if (index === 0) {
                    return {
                        [window.id]: {
                            x: screenFrame.x,
                            y: screenFrame.y,
                            width: leftPaneWidth,
                            height: screenFrame.height
                        }
                    };
                }

                return {
                    [window.id]: {
                        x: screenFrame.x + leftPaneWidth + crackWidth,
                        y: screenFrame.y,
                        width: rightPaneWidth,
                        height: rightWindowsHeight
                    }
                };
            });
            return frames.reduce((frames, frame) => ({ ...frames, ...frame }), {});
        }
    };
}
