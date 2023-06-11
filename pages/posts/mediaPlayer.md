---
title: 基于Vue3实现网页原生播放器（包含弹幕功能）
date: 2023-06-06
updated: 2023-06-06
hide: false
categories:
  - 前端
tags:
  - Vue
author: 布衣1983
description: 基于Vue3实现网页原生播放器的弹幕功能，提供一个思路
toc: false
aside: false
---
# 基于Vue3实现网页原生播放器（包含弹幕功能）

在本篇文章中，我们将一起探索一份自定义的视频播放器实现代码。
这段代码可以用于创建一个简单的视频播放器，具备基本的播放、暂停、进度控制和弹幕功能。
让我们逐步分析这段代码并了解它是如何实现的。
代码的核心部分是一个Vue组件，它包含了视频元素、控制按钮、进度条、音量控制、弹幕显示和输入框等元素。让我们一步一步来看这个组件的不同部分。

首先，我们有一个`<template>`标签，其中包含了视频播放器的HTML结构。其中包含了一个video元素，用于实际播放视频，并通过`v-bind`绑定了视频源。
我们还有一个控制按钮和一个进度条，以及一个弹幕容器和输入框。

接下来，在`<script>`标签中，我们使用了Vue 3的`reactive`和`ref`函数来创建了响应式的数据和引用。
这些数据包括播放状态、进度、音量和弹幕文本。我们还创建了一个引用`videoRef`来引用视频元素，并创建了一个空数组`danmuList`来存储弹幕数据。

在`setup`函数中，我们定义了一系列方法来处理播放、暂停、音量和弹幕的逻辑。其中`togglePlay`方法根据当前播放状态来切换播放和暂停。
`toggleVolume`方法用于切换音量控制器的可见性。`updateProgress`方法会在视频播放过程中更新进度条的值。

我们还有一个`addDanmu`方法，用于添加弹幕。
它会根据输入框中的文本创建一个新的弹幕对象，并将其添加到`danmuList`数组中。
此外，我们还定义了一个`getRandomColor`方法，用于生成随机颜色。

另外，我们还定义了一个`moveDanmus`方法，用于移动弹幕的位置。
在这个方法中，我们遍历`danmuList`数组，更新每个弹幕的右侧位置，从而实现弹幕的移动效果。

最后，在`setInterval`函数中，我们以一定的时间间隔调用`moveDanmus`方法，以使弹幕实现平滑的移动动画。

最后，我们使用`<style>`标签来定义了组件的样式。
这些样式包括视频播放器的大小、控制按钮的位置、进度条和音量控制器的样式，以及弹幕容器和输入框的位置。

这段代码提供了一个基本的视频播放器框架，您可以根据自己的需求进行进一步的定制和扩展。 您可以根据项目的需求，添加更多的功能和样式。

例如，您可以通过在控制按钮上添加事件处理程序来实现其他功能，如快进、后退和全屏等。您还可以通过在进度条上添加鼠标事件来实现用户交互，允许用户直接点击进度条来跳转到视频的特定位置。

此外，您还可以进一步优化弹幕功能。您可以添加弹幕的显示和隐藏按钮，并允许用户自定义弹幕的样式和位置。
您还可以考虑添加弹幕的发送和删除功能，以及对特定时间点的弹幕定位和跳转功能。
在样式方面，您可以根据自己的设计需求自定义视频播放器的外观。您可以修改播放器的尺寸、背景色和控制按钮的样式，以使其与您的网站或应用程序的整体风格一致。

以下是对代码的详细解释和注释：
```vue
<template>
	<div class="video-player">
		<video ref="videoRef" class="video-player__video" @timeupdate="updateProgress">
		<source :src="videoUrl" type="video/mp4" />
		</video>

		<!-- 播放器控制按钮和进度条 -->
		<div class="video-player__controls">
			<button class="video-player__control-btn" @click="togglePlay">
				{{ state.isPlaying ? "Pause" : "Play" }}
			</button>

    		<div class="video-player__progress-bar">
    			<div class="video-player__progress" :style="{ width: state.progress + '%' }"></div>
    		</div>

    		<!-- 音量控制器 -->
    		<div class="video-player__volume-bar">
    			<button class="video-player__control-btn" @click="toggleVolume">
            		Volume
        		</button>
        		<input type="range" v-if="state.isVolumeVisible" v-model="state.volume" min="0" max="1" step="0.1" />
      		</div>
    	</div>

    	<!-- 弹幕容器和输入框 -->
    	<div class="video-player__danmu-container">
    		<div v-for="(danmu, index) in danmuList" :key="index" class="video-player__danmu"
        		:style="{ top: `${danmu.top}px`, color: '#fff', right: `${danmu.right}px` }">
            	<span :style="{
					background:danmu.color,
					display:'inline-block',
					padding:'5px'
				}">
					{{ danmu.text }}
				</span>
    		</div>
    	</div>

    	<input class="video-player__danmu-input" v-model="state.danmuText" placeholder="Enter danmu text"
        	@keyup.enter="addDanmu" />
    </div>
</template>
```
在模板部分，我们定义了视频播放器的结构。视频元素通过`ref`引用到`videoRef`变量，以便在代码中操作视频。控制按钮、进度条、音量控制和弹幕相关的元素也被定义。

```vue
<script>
	import {
		reactive,
		ref
	} from 'vue';

	export default {
		name: 'VideoPlayer',
		props: {
			videoUrl: {
				type: String,
				required: true,
			},
		},
		setup() {
			// 创建响应式数据
			const state = reactive({
				isPlaying: false, // 播放状态
				progress: 0, // 视频播放进度
				isVolumeVisible: false, // 音量控制器可见性
				volume: 0.5, // 音量值
				danmuText: '', // 弹幕文本
			});

			// 引用
			const videoRef = ref(null);
			const danmuList = reactive([]);

			// 播放/暂停切换
			const togglePlay = () => {
				state.isPlaying = !state.isPlaying;
				if (state.isPlaying){ videoRef.value.play(); } else { videoRef.value.pause(); } };
                                		// 音量控制器显示/隐藏切换
		const toggleVolume = () => {
			state.isVolumeVisible = !state.isVolumeVisible;
		};

		// 更新播放进度
		const updateProgress = () => {
			const video = videoRef.value;
			const progress = (video.currentTime / video.duration) * 100;
			state.progress = Math.floor(progress);
		};

		// 添加弹幕
		const addDanmu = () => {
			if (state.danmuText.trim() !== '') {
				const danmu = {
					text: state.danmuText,
					top: Math.floor(Math.random() * 160) + 20, // 随机生成弹幕的垂直位置
					color: getRandomColor(), // 随机生成弹幕颜色
					right: 0, // 弹幕初始位置在右侧边界之外
				};
				danmuList.push(danmu); // 将弹幕添加到弹幕列表
				state.danmuText = ''; // 清空输入框
			}
		};

		// 生成随机颜色
		const getRandomColor = () => {
			var color = "#";
			for (var i = 0; i < 6; i++) color += parseInt(Math.random() * 16).toString(16);
			return color;
		};

		// 移动弹幕
		const moveDanmus = () => {
			for (let i = 0; i < danmuList.length; i++) {
				const danmu = danmuList[i];
				danmu.right += 2; // 调整弹幕的移动速度
				if (danmu.right > window.innerWidth) {
					danmu.right = -200; // 弹幕超出窗口右侧边界后重置位置
				}
			}
		};

		// 每16毫秒调用moveDanmus函数，实现弹幕移动效果（根据需要调整时间间隔以实现更平滑的动画）
		setInterval(moveDanmus, 16);

		// 返回数据和方法
		return {
			state,
			videoRef,
			danmuList,
			togglePlay,
			toggleVolume,
			updateProgress,
			addDanmu,
			getRandomColor,
		};
	},
};
</script>
```

播放器基本样式
```css
<style scoped>
.video-player {
    position: relative;
    width: 800px;
    height: 450px;
}

.video-player__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.video-player__controls {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.video-player__control-btn {
    margin: 0 10px;
}

.video-player__progress-bar {
    width: 60%;
    height: 5px;
    background-color: #ccc;
}

.video-player__progress {
    height: 100%;
    background-color: #f00;
}

.video-player__volume-bar {
    margin-left: 20px;
    position: relative;
}

.video-player__danmu-container {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    height: 80%;
    overflow: hidden;
}

.video-player__danmu {
    position: absolute;
    white-space: nowrap;
}

.video-player__danmu-input {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
```

在样式部分，我们定义了播放器和相关元素的样式，如播放器容器、视频元素、控制按钮、进度条、音量控制器、弹幕容器和输入框等。

这段代码实现了一个简单的视频播放器，包含播放/暂停、进度条、音量控制和弹幕功能。具体实现逻辑如下：

1. `togglePlay` 函数用于切换播放和暂停状态。通过修改 `isPlaying` 属性来控制视频的播放和暂停。
2. `toggleVolume` 函数用于显示或隐藏音量控制器。通过修改 `isVolumeVisible` 属性来控制音量控制器的显示和隐藏。
3. `updateProgress` 函数在视频播放过程中更新进度条的显示。通过监听 `timeupdate` 事件，计算视频播放进度并更新 `progress` 属性。
4. `addDanmu` 函数用于添加弹幕。当输入框中的弹幕文本不为空时，创建一个新的弹幕对象，包括文本、垂直位置、颜色和初始位置，并将其添加到弹幕列表中。
5. `getRandomColor` 函数用于生成随机颜色。通过随机生成十六进制数来构造颜色值。
6. `moveDanmus` 函数用于移动弹幕。遍历弹幕列表，更新每个弹幕的位置，使其从右侧边界移动到左侧边界，并循环播放。
7. 使用 `setInterval` 函数以每16毫秒的间隔调用 `moveDanmus` 函数，实现弹幕的平滑移动效果。

通过以上的代码解释和注释，您应该能够更好地理解每个函数的作用和代码的实现逻辑。这个视频播放器可以作为基础，您可以根据需求进行扩展和定制。

完整代码

```vue
<template>
	<div class="video-player">
		<video ref="videoRef" class="video-player__video" @timeupdate="updateProgress">
			<source :src="videoUrl" type="video/mp4" />
		</video>

		<div class="video-player__controls">
			<button class="video-player__control-btn" @click="togglePlay">
				{{ state.isPlaying ? "Pause" : "Play" }}
			</button>

			<div class="video-player__progress-bar">
				<div class="video-player__progress" :style="{ width: state.progress + '%' }"></div>
			</div>

			<div class="video-player__volume-bar">
				<button class="video-player__control-btn" @click="toggleVolume">
					Volume
				</button>
				<input type="range" v-if="state.isVolumeVisible" v-model="state.volume" min="0" max="1" step="0.1" />
			</div>
		</div>

		<div class="video-player__danmu-container">
			<div v-for="(danmu, index) in danmuList" :key="index" class="video-player__danmu"
				:style="{ top: `${danmu.top}px`, color: '#fff', right: `${danmu.right}px` }">
				<span :style="{
					background:danmu.color,
					display:'inline-block',
					padding:'5px'
				}">
					{{ danmu.text }}
				</span>
			</div>
		</div>

		<input class="video-player__danmu-input" v-model="state.danmuText" placeholder="Enter danmu text"
			@keyup.enter="addDanmu" />
	</div>
</template>

<script>
	import {
		reactive,
		ref
	} from 'vue';

	export default {
		name: 'VideoPlayer',
		props: {
			videoUrl: {
				type: String,
				required: true,
			},
		},
		setup() {
			const state = reactive({
				isPlaying: false,
				progress: 0,
				isVolumeVisible: false,
				volume: 0.5,
				danmuText: '',
			});

			const videoRef = ref(null);
			const danmuList = reactive([]);

			const togglePlay = () => {
				state.isPlaying = !state.isPlaying;
				if (state.isPlaying) {
					videoRef.value.play();
				} else {
					videoRef.value.pause();
				}
			};

			const toggleVolume = () => {
				state.isVolumeVisible = !state.isVolumeVisible;
			};

			const updateProgress = () => {
				const video = videoRef.value;
				const progress = (video.currentTime / video.duration) * 100;
				state.progress = Math.floor(progress);
			};

			const addDanmu = () => {
				if (state.danmuText.trim() !== '') {
					const danmu = {
						text: state.danmuText,
						top: Math.floor(Math.random() * 160) + 20, // Random top position between 20 and 180
						color: getRandomColor(),
						right: 0, // Starting position from the right
					};
					danmuList.push(danmu);
					state.danmuText = '';
				}
			};

			const getRandomColor = () => {
				var color = "#";
				for (var i = 0; i < 6; i++) color += parseInt(Math.random() * 16).toString(16);
				return color;
			};

			const moveDanmus = () => {
				for (let i = 0; i < danmuList.length; i++) {
					const danmu = danmuList[i];
					danmu.right += 2; // Adjust the speed of the danmu here
					if (danmu.right > window.innerWidth) {
						danmu.right = -200; // Reset the position if danmu goes beyond the window
					}
				}
			};

			// Call moveDanmus every 16 milliseconds (adjust the interval for smoother animation if needed)
			setInterval(moveDanmus, 16);

			return {
				state,
				videoRef,
				danmuList,
				togglePlay,
				toggleVolume,
				updateProgress,
				addDanmu,
				getRandomColor,
			};
		},
	};
</script>

<style scoped>
	.video-player {
		position: relative;
		width: 800px;
		height: 450px;
	}

	.video-player__video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.video-player__controls {
		position: absolute;
		bottom: 20px;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.video-player__control-btn {
		margin: 0 10px;
	}

	.video-player__progress-bar {
		width: 60%;
		height: 5px;
		background-color: #ccc;
	}

	.video-player__progress {
		height: 100%;
		background-color: #f00;
	}

	.video-player__volume-bar {
		margin-left: 20px;
		position: relative;
	}

	.video-player__danmu-container {
		position: absolute;
		top: 20px;
		left: 0;
		width: 100%;
		height: 80%;
		overflow: hidden;
	}

	.video-player__danmu {
		position: absolute;
		white-space: nowrap;
	}

	.video-player__danmu-input {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
```

