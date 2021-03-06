
// export {Applescript} from './applescript'
// export {default as Spotlight} from './spotlight'

import { App } from './app'
import { Bookmark } from './bookmark'
// // import { BrowserTab } from './browser-tab'
import { Contact, ContactDate, ContactEmail, ContactPhoneNumber } from './contact'
import { RelationshipDate, RelationshipPhoneNumber, RelationshipEmail } from './relationship'
import { PersonalDate } from './me'
import { Holiday } from './event'
import { File } from './file'
// import { OpenWindow } from './open-window'
import { Path } from './path'
import { Pane } from './preference-pane'
import { RunningApp } from './running-app'
import { SystemCommand } from './command'
import { Volume } from './volume'

export default [App, Bookmark, /*BrowserTab,*/ Contact, ContactDate, ContactEmail, ContactPhoneNumber, File,  Holiday, /*OpenWindow,*/ Path, PersonalDate, Pane, RelationshipDate, RelationshipEmail, RelationshipPhoneNumber, RunningApp, SystemCommand, Volume]
