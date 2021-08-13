class Settings {
  constructor(
    theme = 'dark',
    music = 'trance',
    difficulty = 'easy',
  ) {
    this.settings = new Map();
    this.settings.set('theme', theme);
    this.settings.set('music', music);
    this.settings.set('difficulty', difficulty);
  }

  get() {
    return this.settings;
  }
}

export default Settings;
