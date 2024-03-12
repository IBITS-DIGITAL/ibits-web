// Pre-set Animation
const infoFromLeft = {
  offscreen: { opacity: 0, x: -50 },
  onscreen: {
    opacity: 1, x: 0,
    transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.2 }
  }
};

const infoFromRight = {
  offscreen: { opacity: 0, x: 50 },
  onscreen: {
    opacity: 1, x: 0,
    transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.2 }
  }
};

const imgFromRight = {
  offscreen: { opacity: 0, x: 50 },
  onscreen: {
    opacity: 1, x: 0,
    transition: { type: "spring", bounce: 0.2, duration: 1 }
  }
};

const imgFromLeft = {
  offscreen: { opacity: 0, x: -50 },
  onscreen: {
    opacity: 1, x: 0,
    transition: { type: "spring", bounce: 0.2, duration: 1 }
  }
};

export const animations: any = {
  'style-1': {
    'image': imgFromRight,
    'info': infoFromLeft,
    'big-circle': {
      offscreen: { opacity: 0, y: 50, x: 0 },
      onscreen: {
        opacity: 1, y: '-30%', x: '40%',
        transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.2 }
      }
    },
    'small-circle': {
      offscreen: { opacity: 0, y: 50, x: '150%' },
      onscreen: {
        opacity: 1, y: 0, x: '250%', 
        transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.4 }
      }
    }
  },
  'style-2': {
    'image': imgFromLeft,
    'info': infoFromRight,
    'big-circle': {
      offscreen: { opacity: 0, y: 50, x: 0 },
      onscreen: {
        opacity: 1, y: '-12%', x: '-50%',
        transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.2 }
      }
    },
    'small-circle': {
      offscreen: { opacity: 0, y: 50, x: 0 },
      onscreen: {
        opacity: 1, y: '-20%', x: '-130%',
        transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.4}
      }
    }
  },
  'style-3': {
    'image': imgFromRight,
    'info': infoFromLeft,
    'big-circle': {
      offscreen: { opacity: 0, y: 50, x: 0 },
      onscreen: {
        opacity: 1, y: '100%', x: '-18%',
        transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.2 }
      }
    },
    'small-circle': {
      offscreen: { opacity: 0, y: 50, x: 0 },
      onscreen: {
        opacity: 1, y: '-15%', x: '160%',
        transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.4}
      }
    }
  },
  'style-4': {
    'image': imgFromLeft,
    'info': infoFromRight,
    'big-circle': {
      offscreen: { opacity: 0, y: 50, x: 0 },
      onscreen: {
        opacity: 1, y: '-12%', x: '-18%',
        transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.2 }
      }
    },
    'small-circle': {
      offscreen: { opacity: 0, y: 50, x: 0 },
      onscreen: {
        opacity: 1, y: '-100%', x: '-145%',
        transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.4}
      }
    },
    'xs-circle': {
      offscreen: { opacity: 0, y: 50, x: 0 },
      onscreen: {
        opacity: 1, y: '-60%', x: '-310%',
        transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.6}
      }
    },
  }
};